const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return /^[A-Za-z\s]+$/.test(v);
          },
          message: 'First name should only contain letters and spaces'
        }
    },
    lastName: {
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return /^[A-Za-z\s]+$/.test(v); 
          },
          message: 'Last name should only contain letters and spaces'
        }
    },
    mobile: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: 'Mobile number must be 10 digits'
        }
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        validate: {
            validator: function(v) {
                return /^\S+@\S+\.\S+$/.test(v);
            },
            message: 'Invalid email format'
        }
    },
    address: {
        street: String,
        city: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return /^[A-Za-z\s]+$/.test(v);
                },
                message: 'City should only contain letters and spaces'
            }
        },
        state: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return /^[A-Za-z\s]+$/.test(v);
                },
                message: 'State should only contain letters and spaces'
            }
        },
        country: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return /^[A-Za-z\s]+$/.test(v);
                },
                message: 'Country should only contain letters and spaces'
            }
        },
    },
    loginId: {
        type: String,
        required: true,
        minlength: 8, 
        maxlength: 20,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/.test(v);
            },
            message: 'Password must be at least 6 characters long, contain 1 uppercase letter, 1 lowercase letter, and 1 special character'
        }
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);