function run(max , min) 
{   
    const intNumberOfRows = document.getElementById('numberOfColumns').value;
    const intNumberOfColumns = document.getElementById('numberOfRows').value;
    if(intNumberOfRows == "" || intNumberOfColumns == "" )
    {
        alert('Please fill required fields.');
    } else if (intNumberOfRows < 1 || intNumberOfColumns < 1)
        alert('All numbers must be 1 or greater');
    else
        {
        let arrRowNumbers = [];
        let arrColumnNumbers = [];
        let intTop = 0, intBottom = (intNumberOfColumns), intLeft = 0, intRight = (intNumberOfRows );
        let arrMatrix = [[]];
        let intArrayAverage = 0;
        document.write ('<style>td{border:1px solid black;}</style><table><tr><td></td>');
        for (var i = 0; i < intNumberOfColumns; i++) 
        {
            arrRowNumbers[i] = (Math.floor(Math.random() * (max - min)) + min);
            intArrayAverage = intArrayAverage + arrRowNumbers[i];
        }
        intArrayAverage = intArrayAverage / arrRowNumbers.length;

        for (var i = 0; i < intNumberOfRows; i++) 
        {
            arrColumnNumbers [i] = (Math.floor(Math.random() * (max - intArrayAverage) + intArrayAverage));
            document.write('<td>' + arrColumnNumbers [i] + '</td>');
        }
        document.write ('</tr>');
        for (var i = 0; i < intNumberOfColumns; i++) 
        {
            intArrayAverage=0;
            intCounter = 0;
            document.write ('<tr>')
            arrMatrix[i] = [];
            document.write ('<td>' + arrRowNumbers[i] + '</td>');
            for (var j = 0; j < intNumberOfRows; j++)
            {
                arrMatrix [i][j] = arrRowNumbers[i] * arrColumnNumbers[j];
                intArrayAverage = intArrayAverage +  arrMatrix [i][j];
                document.write('<td>' +arrMatrix [i][j] + '</td>');
            }
            document.write('</tr>');
        }
        document.write ('</table>');
        
        while((intTop < intBottom && intLeft < intRight)) 
        {
            for (i = intLeft; i < intRight; i++) 
            { 
                document.write(arrMatrix[intTop][i] + ", "); 
            } 
            intTop++; 
            for (i = intTop; i < intBottom; i++) 
            { 
                document.write(arrMatrix[i][intRight - 1] + ", "); 
            } 
            intRight--; 
            if (intTop < intBottom)
            { 
                for (i = intRight - 1; i >= intLeft; i--) 
                { 
                    document.write(arrMatrix[intBottom - 1][i] + ", "); 
                } 
                intBottom--; 
            } 
            if (intLeft < intRight) 
            { 
                for (i = intBottom - 1; i >= intTop; i--) 
                { 
                    document.write(arrMatrix[i][intLeft] + ", "); 
                } 
                intLeft++; 
            }
        }
    }
}