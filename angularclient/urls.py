import hyperadmin

from django.conf.urls.defaults import patterns, include, url

from angularclient.clients import AngularJSClient
from angularclient.views import DashboardView, ObjectListView, ObjectDetailView

admin_client = AngularJSClient(api_endpoint=hyperadmin.site)

urlpatterns = patterns('',
    url(r'^tpl/dashboard.html$', DashboardView.as_view(), name='angularclient-dashboard'),
    url(r'^tpl/object-list.html$', ObjectListView.as_view(), name='angularclient-object-list'),
    url(r'^tpl/object-detail.html$', ObjectDetailView.as_view(), name='angularclient-object-detail'),
    url(r'^', include(admin_client.urls)),
)
