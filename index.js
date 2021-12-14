function foobar(n) {
    for (i = 1; i <= n; i++) {
        let answer = ((i % 3 ? '' : 'Foo') + (i % 5 ? '' : 'Bar'))
        console.log(answer || i)
    }
}
  
 foobar(15)
