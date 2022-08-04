$.ajax({

    type : 'get' ,
    url : 'https://api.covid19api.com/summary' ,
    success : function(response)//if the api linked successfully then this function works
    {
        console.log(response.Countries)

        for(var i=0; i<response.Countries.length ; i++)
        {
            //console.log(response.Countries[i].Country)

            var totalactive = response.Countries[i].TotalConfirmed - response.Countries[i].TotalRecovered

            var tablerow = `<tr>
            <td>${response.Countries[i].Country}</td>
            <td>${response.Countries[i].TotalConfirmed}</td>
            <td>${totalactive}</td>
            <td>${response.Countries[i].TotalRecovered}</td>
            <td>${response.Countries[i].TotalDeaths}</td>
            </tr>`

            $(`#tbody`).append(tablerow)
        }

        $(`#covidtable`).DataTable()

    },
    error : function(error)//if api doesn't linked successfully then this function works.
    {
        console.log(error)
    }

})