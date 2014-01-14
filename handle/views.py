# -*- coding: utf-8 -*-
from django.shortcuts import render,redirect

from django.contrib.auth.models import User
from django.contrib.auth import login,authenticate,logout

import os
import sys
import codecs
import shutil
import hashlib
import chardet
BASE_DIR = os.path.dirname(os.path.dirname(__file__))+"/"

# Create your views here.

from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText
from email.MIMEImage import MIMEImage
from email.Header import Header
import smtplib
import sys
from handle.models import ihepecard

import urllib
import urllib2,time

def post(url, data):
    req = urllib2.Request(url)
    data = urllib.urlencode(data)
    opener = urllib2.build_opener(urllib2.HTTPCookieProcessor())
    response = opener.open(req, data)
    return response.read()
def send_mail(strTo,sub,sender,picpath):
    msg = MIMEMultipart('alternative')
    msg['Subject'] = Header(sub,'utf-8')
    msg['From']=sender
    msg['To']=strTo
    html = """ <html> <body> <img src=\"cid:image1\"> </body> </html> """
    htm = MIMEText(html,'html','utf-8')
    msg.attach(htm)
    fp = open(picpath,'rb')
    msgImage = MIMEImage(fp.read())
    fp.close()
    msgImage.add_header('Content-ID','<image1>')
    msg.attach(msgImage)
    smtp = smtplib.SMTP()
    smtp.connect('mail.163.com.cn')
    smtp.login('e-card','*********************')
    smtp.sendmail('********@163.com',strTo,msg.as_string())
    smtp.quit()
def index(request):
    return render(request,'handle/index.html')
def preview(request):
    if request.method == 'POST':
        email=request.POST.get('email','')
        name=request.user.get_short_name()
        greetings=request.POST.get('greetings','')
        if len(email)>100:
            return redirect('/')
        if len(greetings) > 250:
            return redirect('/')
        pic=request.POST.get('pic','')
        reload(sys)
        sys.setdefaultencoding('utf-8')
        emid=hashlib.md5(email+name+greetings+pic).hexdigest()
        ihepecard.objects.get_or_create(idcard=emid,receiver_email=email,greetings=greetings,
                pic=pic,sender_name=name,sender_email=request.user)
    else:
        return redirect('/')
    f=codecs.open("/root/.ecardout","w",'utf-8')

    fr=codecs.open("/root/.ecardread","w",'utf-8')
    fr.write(greetings)
    fr.close()

    fr=codecs.open("/root/.ecardread","r",'utf-8')
    total_line=[]
    for fp in fr.readlines():
        fp=fp.strip()
        if len(fp)==0:
            continue
        else:
            total_line.append(fp)
    total_len=len(total_line)
    i=0
    ti=0
    for fp in total_line:
        ti+=1
        flag=True
        while flag:
            i+=1
            if ti==total_len:
                f.write("\n")
                f.write("                             "+fp[:15]+"\n")
                if len(fp)<=15:
                   flag=False 
                   break
                fp=fp[15:]
            elif i!=1:
                f.write("  "+fp[:13]+"\n")
                if len(fp)<=13:
                   flag=False 
                   break
                fp=fp[13:]
            else:
                f.write(fp[:15]+"\n")
                f.write("\n")
                if len(fp)<=15:
                   flag=False 
                   break
                fp=fp[15:]
    fr.close()
    f.close()

    f=codecs.open("/root/.ecardout","r",'utf-8')
    fp=f.readlines()
    f.close()

    fr=codecs.open("/root/.ecardread","w",'utf-8')
    lfp=len(fp)
    lfp=6-(lfp+1)/2
    if lfp<0:
        lfp=0
    i=0
    for i in range(lfp):
        fr.write("\n")
    for fi in fp:
        fr.write(fi)
    fr.close()

    picpath=BASE_DIR+"static/handle/"
    shutil.copyfile(picpath+"img/"+pic+".jpg",picpath+"pre-img/"+emid+".jpg")
    os.system('mogrify -font /root/wengcc/hwxk.ttf -pointsize 24 -fill black -weight bolder -gravity northwest -annotate +40+110 @"/root/.ecardread" '+picpath+"pre-img/"+emid+".jpg")

    return render(request,'handle/preview.html',{'email':str(request.user),'name':name,'pic':emid})
def send(request,eid=0):
    email=str(request.user)
    name=request.user.get_short_name()
    reload(sys)
    sys.setdefaultencoding('utf-8')
    picpath=BASE_DIR+"static/handle/pre-img/"+eid+".jpg"
    try:
        to_email=ihepecard.objects.get(idcard=eid)
    except Exception,ex:
        return redirect('/')
    try:
#        send_mail(to_email.receiver_email,"I have sent a you a card from the http://ecard.ihep.ac.cn",
#        send_mail(to_email.receiver_email,unicode(name)+u"从http://ecard.ihep.ac.cn 给您发送一张电子贺卡!",
#        send_mail(to_email.receiver_email,str(name),
        send_mail(to_email.receiver_email,str(name.strip())+"从http://ecard.ihep.ac.cn 给您发送一张电子贺卡!   "+str(name.strip())+"  sent you a greeting card from http://ecard.ihep.ac.cn",
                email,picpath)
    except Exception,ex:
        return redirect('/')
    return render(request,'handle/make.html',{'email':email,'name':name,'pic':to_email.pic,'sendok':True})
def tmake(request,eid=0):
    email=str(request.user)
    name=request.user.get_short_name()
    try:
        to_email=ihepecard.objects.get(idcard=eid)
    except Exception,ex:
        return redirect('/')
    return render(request,'handle/make.html',{'email':email,'name':name,'pic':to_email.pic})
def make(request,eid=0):
    email=str(request.user)
    name=request.user.get_short_name()
    return render(request,'handle/make.html',{'email':email,'name':name,'pic':eid})
def logoutview(request):
    logout(request)
    return redirect('/')
def select_ecard(request):
    if request.method == 'POST':
        email=request.POST.get('email','')
        email+='@ihep.ac.cn'
        try:
            user=authenticate(username=email,password=email)
            login(request,user)
            name=request.user.get_short_name()
        except Exception,ex:
            return redirect('/')
        return render(request,'handle/select_ecard.html',{'pics':range(14),'email':email,'name':name})
    elif request.method == 'GET':
        email=str(request.user)
        name=request.user.get_short_name()
        return render(request,'handle/select_ecard.html',{'pics':range(14),'email':email,'name':name})
    return redirect('/')
