from django.shortcuts import render_to_response
from django.template import RequestContext

from forms import rsvp


def home(request):
    submitted = False
    if request.method == 'POST':
        rsvpform = rsvp(request.POST)
        if rsvpform.is_valid():
            rsvpform.save()
            submitted = True
    else:
        rsvpform = rsvp()
    return render_to_response('home.html',{
        'rsvp':rsvpform,
        'submitted':submitted,
    },context_instance = RequestContext(request) )