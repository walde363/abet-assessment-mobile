function statusDivide(data, assesmentStatus) {
    var procesedData = []
    for (var i = 0; i < data.length; i++) {
        if(data[i].status == assesmentStatus)
        {
            procesedData.push(data[i])
        }
    }

    return (procesedData)
}

export default statusDivide; 