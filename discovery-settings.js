/*******************************************
 discovery defaults/settings file
********************************************/

// create node
var settings = {}

// general settings
settings.verbose = true;
settings.registryID = null;
settings.renewTTL = 300000;
settings.contentType = "application/x-www-form-urlencoded";
settings.acceptType = "application/json";

// your service identifiers
settings.serviceName = "uuid-generator";
settings.serviceURL = "http://rwmbook-uuid.herokuapp.com";

// the registry service endpoints
settings.registerURL = "http://rwmbook-registry.herokuapp.com/reg/";
settings.renewURL = "http://rwmbook-registry.herokuapp.com/renew/";
settings.unregisterURL = "http://rwmbook-registry.herokuapp.com/unreg/";
settings.findURL = "http://rwmbook-registry.herokuapp.com/find/";
settings.bindURL = "http://rwmbook-registry.herokuapp.com/bind/";

// publish node
module.exports = settings;
