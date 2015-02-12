from django.contrib import admin

from models import Attendee

class AttendeeAdmin(admin.ModelAdmin):
    list_display = ('email','attending','submitted')


admin.site.register(Attendee,AttendeeAdmin)