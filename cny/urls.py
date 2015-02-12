from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    (r'^$','rsvp.views.home'),
    (r'^gung-hay-fat-choy/$','rsvp.views.home'),
    url(r'^admin/', include(admin.site.urls)),
)
