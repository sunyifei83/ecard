ecard 电子贺卡服务平台
==================

.. image:: https://api.travis-ci.org/wcc526/ecard.png?branch=master
    :target: http://travis-ci.org/wcc526/ecard
.. image:: https://coveralls.io/repos/wcc526/ecard/badge.png?branch=master
    :target: https://coveralls.io/r/wcc526/ecard
.. image:: https://drone.io/github.com/wcc526/ecard/status.png 
    :target: https://drone.io/github.com/wcc526/ecard/latest
.. image:: https://pypip.in/v/ecard/badge.png
    :target: https://crate.io/packages/ecard/
.. image:: https://pypip.in/d/ecard/badge.png
    :target: https://crate.io/packages/ecard/

Overview
--------
CloudSafe 云安全扫描平台
which use the `golismero <https://github.com/golismero/golismero>`_ for the bug scan

this web ui is write by django,only need python environment
but the scan tools is basic golismero,make sure you are qualified ,like install
nmap,sqlmap and so on,the os system is kali or backtrack is better!

Requirements
--------
- os system: Backtrack5 R3 or kali,kali is better,because need the tools on this system
- python 2.6 or 2.7
- django (1.5+)


Sceenshots
--------

* The basic login ui like:
.. image:: https://raw.github.com/wcc526/cloudsafe/master/docs/img/screenshots/login.png
* The results like:
.. image:: https://raw.github.com/wcc526/cloudsafe/master/docs/img/screenshots/results.png
* The admin like:
.. image:: https://raw.github.com/wcc526/cloudsafe/master/docs/img/screenshots/admin.png
* The report1 like:
.. image:: https://raw.github.com/wcc526/cloudsafe/master/docs/img/screenshots/report1.png
* The report2 like:
.. image:: https://raw.github.com/wcc526/cloudsafe/master/docs/img/screenshots/report2.png
* The scan queue like:
.. image:: https://raw.github.com/wcc526/cloudsafe/master/docs/img/screenshots/queue.png

Demo
--------
There's a demo at http://cloudsafe.ihep.ac.cn, Note: it only visit from the ihep intranet now!


Installation
--------

- 1.download:
django_admin_bootstrapped 
bootstrap_toolkit
from pypi::

    $ pip install cloudsafe

or::

    $ easy_install cloudsafe

or clone from github::

    $ git clone https://github.com/wcc526/cloudsafe.git

- 2.you can run with this steps:: 

    $ python manage.py runserver 0.0.0.0:80

The basic username is root,password is toor

enjoy it!

Documentation
--------

You can find more in the documentation at `http://cloudsafe.readthedocs.org/ <http://cloudsafe.readthedocs.org/>`_

Contact
--------

* 1.IRC channel: ``#cloudsafe``, on irc.freenode.net 
* 2.contact me: wcc526@gmail.com or 949409306@qq.com
* 4.QQ群:260816512

What will be the next features?
--------

I will add more functions,like:

* more powerful report for the statistics
* now the basic language is chinese,I will support english,spanlish
* distributed

Thanks to
--------

* my teachers `@高能老黄牛 <http://weibo.com/u/2406562641>`_ `@crist齐 <http://weibo.com/u/1402163021>`_

.. image:: https://d2weczhvl823v0.cloudfront.net/wcc526/cloudsafe/trend.png
    :alt: Bitdeli badge
        :target: https://bitdeli.com/free`
