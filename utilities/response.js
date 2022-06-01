'use strict';

/*
Developed By: Oodles Technologies
Dated On: 11-11-2021
Description: Base response format. 
*/

const resObject = {
    'success': false,
    'message': '',
    'data': null
};

module.exports = {
    sendError: (message, data) => {
        data = data || null;
        console.error(data);
        return Object.assign({}, resObject, {
            message: message,
            data: data
        })
    },
    sendSuccess: (message, data) => {
        data = data || null
        return Object.assign({}, resObject, {
            success: true,
            message: message,
            data: data
        })
    }
}

