from django.db import models

class Attendee(models.Model):
    name = models.CharField(max_length=500,blank=True,null=True)
    email = models.CharField(max_length=500,blank=True,null=True)
    attending = models.BooleanField(default=True)
    plus_one = models.BooleanField(default=False)

    submitted = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.email

