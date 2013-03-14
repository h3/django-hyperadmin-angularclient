# -*- coding: utf-8 -*-

#from django.core.urlresolvers import reverse
#from django.shortcuts import get_object_or_404
from django.views.generic import TemplateView
#from django.views.generic.edit import FormView

#from website.models import *


class DashboardView(TemplateView):
    template_name = 'angularclient/dashboard.html'

class DashboardView(TemplateView):
    template_name = 'angularclient/object-detail.html'
