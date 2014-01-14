from django.contrib import admin
from handle.models import ihepecard
import os,sys

class MyEcardAdmin(admin.ModelAdmin):
      list_display=('idcard','receiver_email','greetings','sender_name')

admin.site.register(ihepecard,MyEcardAdmin)

