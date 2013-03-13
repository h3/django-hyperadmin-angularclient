from hyperadmin.mediatypes.collectionjson import CollectionHyperAdminJSON

class CollectionAngularClientJSON(CollectionHyperAdminJSON):
    recognized_media_types = [
        'application/vnd.Collection.hyperadmin.angularclient+JSON'
    ]
