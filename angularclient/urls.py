import hyperadmin

from django.conf.urls.defaults import patterns, include, url

from angularclient.clients import AngularJSClient
from angularclient.views import DashboardView

admin_client = AngularJSClient(api_endpoint=hyperadmin.site)

urlpatterns = patterns('',
    url(r'^tpl/dashboard.html$', DashboardView.as_view(), name='angularclient-dashboard'),
    url(r'^', include(admin_client.urls)),
)
