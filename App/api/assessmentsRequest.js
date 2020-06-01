import yelp from './yelp'

export async function getAssessmentAttr(url) {
    try {
        const response = await yelp.get(url, {});
        return response;
    } catch (error) {
        console.log("Error: ", error);
        return null;
    }
}

export function transformData(data, columnName, columnID) {

    if (data == undefined || data.length == 0) {
        return [];
    }
    return data.map((each) => {
        return { label: each[columnName], value: each[columnID] }
    });
}

export function getChildByParentID(data, parentId, searchID) {

    if (data == undefined || data.length == 0) return [];

    return data.filter(each => each[searchID] == parentId);
}

export async function createAssessment(data) {

    for (key in data) {
        // console.log("KEY: ", key);
        if (data[key] == undefined || data[key] == -1 || data[key] == "") {
            return [false, errorMsg(key)];
        }
    }

    let response = await yelp.post('/post/createAssessment', data);

    response = response.data;

    // server error
    if (!response) return [false, "Cannot create Assessment"];

    // bad response
    if (!response.success) return [false, response.message];

    // success
    return [true, response.message];

}

function errorMsg(name) {

    switch (name) {
        case "name":
            return "Assessment Name Cannot be empty.";
        case "section":
            return "Section cannot be empty and only numers are allowed.";
        case "stdID":
            return "Please Select a Study Program.";
        case "outcomeID":
            return "Please Select an Outcome.";
        case "courseID":
            return "Please Select a course.";
        case "rubricID":
            return "Please Select a Rubric.";
        case "termID":
            return "Please Select an Academic Term.";
        case "userEmail":
            return "Cannot find your email, Please try to log-in again."
        default:
            return "Invalid Option.";
    }
}