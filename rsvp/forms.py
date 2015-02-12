from django.forms import ModelForm
from models import Attendee

class rsvp(ModelForm):
    class Meta:
        model = Attendee
        fields = ['name','email','attending','plus_one']