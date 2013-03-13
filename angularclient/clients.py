from hyperadmin.clients.common import SimpleTemplateClient

from angularclient.mediatypes import CollectionAngularClientJSON

class AngularJSClient(SimpleTemplateClient):
    default_namespace = 'angularjsclient'
    template_name = 'angularclient/index.html'
    
    def __init__(self, *args, **kwargs):
        super(AngularJSClient, self).__init__(*args, **kwargs)
        if hasattr(self.api_endpoint, 'register_media_type'):
            self.api_endpoint.register_media_type('application/vnd.Collection.hyperadmin.angularclient+JSON', CollectionAngularClientJSON)

