const mongoose = require('mongoose')

const TracksScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        album:{
            type: Number
        },
        cover:{
            type: String,
            validate: {
                calidator: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },
        artist:{
            name:{
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            },
        },
        duration:{
            start: {
                type: Number,
            },
            end: {
                type: Number,
            },
        },
        mediaId: {
            type: mongoose.Types.ObjectId,
        },
    },
    {
        timestamps: true, 
        versionKey: false
    }
);

module.exports = mongoose.model('users', TracksScheme);