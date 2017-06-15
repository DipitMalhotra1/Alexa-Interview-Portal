var mongoose= require('mongoose');
var Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');


var connection = mongoose.createConnection("mongodb://admin:admin@ds127492.mlab.com:27492/filtered");

autoIncrement.initialize(connection);


var jobTemplateSchema = new Schema({
    _id:  {
        type: Number,
    },
    jobTitle:  {
        type: String,
        default: 'Full Stack Developer',

    },
    jobRefID:  {
        type: String
    },
    creater:{
        type: Number
    },
    organization:{
        type: Number
    },
    managerEmail:{
        type: String
    },
    createdDate:{
        type: Date
    },
    vqTimeLimit:{
        type:Number
    },
    isArchived:{
        type:Boolean
    },

    accessibleOrgs: {
        type: Array
    },
    questions:{
        type:Array
    },
    status:{
        type: Number,
        default: 4
    },
    __V:{
        type: Number,
        default:41
    },
    simulation:{
        type: Boolean
    }


});

var educationSchema= new Schema({
    major:{
        type:String,
        default:"computer science"
    },
    school:{
        type:String,
        default:"NYU"
    },

    startDate:{
        type:Date,
    },
    endDate:{
        type:Date
    }

});

var experienceSchema= new Schema({
    position:{
        type:String,
        default: "Software Engineer"
    },
    company:{
        type:String,
        default:"Google Inc"
    },
    isCurrentJob:{
        type:Boolean
    },
    startDate: {
        type: Date
    },
    endDate:{
        type:Date
    },
    _id:{
        type:String
    }
});

var skillSchema= new Schema({
    skillName:{
        type:String,
        default:"Java"
    },
    confidence:{
        type: String,
        default:"80%"
    },
    _id:{
        type:String
    }

});


var submitterSchema=new Schema({

    _id: {
        type: Number
    },
    photo: {
        type: String,
        default: "https://media.licdn.com/mpr/mprx/0_Pj_hStuUJm6lhXo6PyuaHPOJsevA6vE6tOjSwPGBApq-CN4erDG2dMOnne2"
    },
    profileUrl: {
        type: String,
        default: "https://www.linkedin.com/in/oliver-weng-8510231a"
    },
    title: {
        type: String,
        default: "Senior Software Engineer at Filtered"
    },
    email: {
        type: String,
        default: "oliver3927@gmail.com"
    },
    provider: {
        type: String,
        default: "linkedin"
    },
    providerId: {
        type: String,
        default: "Gf4uMa_EJ4"
    },
    role: {
        type: String,
        default: "recruiter"
    },
    createdDate: {
        type: String,
        default: "2016-01-20T14:25:38.829Z"
    },
    displayName: {
        type: String,
        default: "Oliver Weng"
    },
    education: [educationSchema],
    experience: [experienceSchema],
    skills: [skillSchema],
    resume:{
        type:String
    }
});




var interviewSchema =  new Schema({


        iscoding: {
            type: Boolean,
        },



        simulation: {
            type: Boolean
        },

        isArchived: {
            type: Boolean,
        },
        organization: {
            type: Number,
            default: 50
        },

        candidateEmail: {
            type:String,
            default: 'oweng@filtered.ai'
        },
        isFinished: {
            type: String,
        },

        deadline: {
            type: Date,
        },
        interviewName: {
            type: String,
            default: 'Full Stack Developer'
        },

         jobTemplate: [jobTemplateSchema],

            jobDescription: {
            type: String,
        },


            createDate:{
            type: Date,
        },

            watchers: {
            type: Array,
        },

        rateBy: {
            type: Array,
        },

        questions: {
            type: Array,

        },

        vqTimeLimit: {
            type: Number,
            default:180
        },
        averageScore: {
            type: Number,
            default: 75
        },

        submitDate: {
            type: Date  ,
        },

        submitter: [submitterSchema]
    }
);



// interviewSchema.plugin(autoIncrement.plugin, {
//     model: 'Interviews',
//     field: 'candidateID',
//     startAt: 100,
//     incrementBy: 10
// });
// interviewSchema.plugin(autoIncrement.plugin, {
//     model: 'Interviews',
//     field: 'creator',
//     startAt: 1000,
//     incrementBy: 10
// });


var Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;/**
 * Created by dipit on 6/13/17.
 */
