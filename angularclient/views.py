# -*- coding: utf-8 -*-

from django.views.generic import TemplateView


class DashboardView(TemplateView):
    template_name = 'angularclient/dashboard.html'


class ObjectListView(TemplateView):
    template_name = 'angularclient/object-list.html'


class ObjectDetailView(TemplateView):
    template_name = 'angularclient/object-detail.html'
