from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
        # Examples:
        # url(r'^$', 'ecard.views.home', name='home'),
        # url(r'^blog/', include('blog.urls')),

        url(r'^admin/', include(admin.site.urls)),
        url(r'^$','handle.views.index'),
        url(r'^select_ecard/$','handle.views.select_ecard'),
        url(r'^make/(?P<eid>[0-9a-z.]+)/$','handle.views.make'),
        url(r'^tmake/(?P<eid>[0-9a-z.]+)/$','handle.views.tmake'),
        url(r'^send/(?P<eid>[0-9a-z.]+)/$','handle.views.send'),
        url(r'^preview/$','handle.views.preview'),
        url(r'^callback/$','handle.views.callback'),
        url(r'^logout/$','handle.views.logoutview'),
        )
