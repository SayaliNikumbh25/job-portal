import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        logoUrl: {
            type: String,
            required: true,
        },
        salary: {
            type: Number,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        locationType: {
            type: String,
            required: true,
        },
        information: {
            type: String,
            required: true,
        },
        jobType: {
            type: String,
            required: true,
        },
        skills: {
            type: Array,
            required: true,
        },
        refUserId: {
            type: mongoose.ObjectId,
        },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Job = mongoose.model("Job", jobSchema)

export default Job