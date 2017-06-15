var assert = require('assert');

exports.insertDocument = function(db, document, collection) {
    // Get the documents collection
    var coll = db.collection(collection);
    // Insert some documents
    coll.insert(document, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted " + result.result.n + " documents into the document collection "
            + collection);
    });
};

exports.findDocuments = function(db, collection,callback) {
    // Get the documents collection
    var coll = db.collection(collection);

    coll.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
};


exports.findPendingCount = function(db, collection) {
    // Get the documents collection
    var coll = db.collection(collection);

    coll.find({"isFinished":"false"}).count()
        .then(function(numItems) {
        var count = numItems;
        return count;
    });
};

exports.findbyId= function(db,collection,id,callback) {
    var coll = db.collection(collection);
    coll.find({"_id": id}).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs)
        return docs;

    })
}

exports.findPending = function(db, collection,value,callback) {
    // Get the documents collection
    var coll = db.collection(collection);

    coll.find({"isFinished":value}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log(docs);
        callback(docs);
    });
};





exports.findPendingPositions = function(db, collection) {
    // Get the documents collection
    var coll = db.collection(collection);

    coll.find({},{"interviewName":1}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log(docs);
    });
};



exports.findCompleted= function(db,collection,callback){
    var coll = db.collection(collection);
    coll.find({"isFinished":"true"}).toArray(function(err, docs) {
        assert.equal(err, null);
        callback(docs);
    });

};
exports.removeDocument = function(db, document, collection, callback) {

    // Get the documents collection
    var coll = db.collection(collection);

    // Delete the document
    coll.deleteOne(document, function(err, result) {
        assert.equal(err, null);
        console.log("Removed the document " + document);
        callback(result);
    });
};

exports.updateDocument = function(db, document, update, collection, callback) {

    // Get the documents collection


    var coll = db.collection(collection);
    coll.updateOne(document
        , { $set: update }, null, function(err, result) {

            assert.equal(err, null);
            console.log("Updated the document with " + update);
            callback(result);
        });
};


/**
 * Created by dipit on 4/19/17.
 */
