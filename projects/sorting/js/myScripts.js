function switchAlgorithmCopy() {

  // $('#bubble-sort-copy').addClass('hidden');
  // $('#insertion-sort-copy').addClass('hidden');
  // $('#selection-sort-copy').addClass('hidden');
  // $('#odd-even-sort-copy').addClass('hidden');
  // $('#cocktail-sort-copy').addClass('hidden');
  // $('#quicksort-sort-copy').addClass('hidden');
  // $('#heapsort-sort-copy').addClass('hidden');
  // $('#merge-sort-copy').addClass('hidden');
  // $('#intro-sort-copy').addClass('hidden');

  let algorithmName = $('#algo-select').val();

  if (algorithmName === 'bubblesort') {
    $('#english-copy').text(
      'Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort. Bubble sort can be practical if the input is in mostly sorted order with some out-of-order elements nearly in position.'
    );
    $('#pseudocode-copy').text(
'procedure bubbleSort(A : list of sortable items )\n  n = length(A)\n  repeat\n    swapped = false\n    for i = 1 to n-1 inclusive do\n      /* if this pair is out of order */\n      if A[i-1] > A[i] then\n        /* swap them and remember something changed */\n        swap( A[i-1], A[i] )\n        swapped = true\n      end if\n    end for\n  until not swapped\nend procedure'
    );
    $('#source-link').attr('href', 'https://en.wikipedia.org/wiki/Bubble_sort');

  } else if (algorithmName === 'selectionsort') {
    $('#english-copy').text(
      'The algorithm divides the input list into two parts: the sublist of items already sorted, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right. Uniqueness of selection sort when compared to other sorting techniques: The time efficiency of selection sort is quadratic, so there exists a number of sorting techniques which have better time complexity than selection sort. Even then, considering the number of swaps made, the number of swaps will be n-1 both in worst as well as best case. That is, time efficiency of selection sort with respect to swaps is linear. This property distinguishes selection sort positively from many other sorting algorithms.'
    );
    $('#pseudocode-copy').text(
'procedure selection sort\n list  : array of items\n n     : size of list\n\n for i = 1 to n - 1\n /* set current element as minimum*/\n    min = i\n\n    /* check the element to be minimum */\n\n    for j = i+1 to n\n       if list[j] < list[min] then\n          min = j;\n       end if\n    end for\n\n    /* swap the minimum element with the current element*/\n    if indexMin != i  then\n       swap list[min] and list[i]\n    end if\n end for\n\nend procedure'
    );
    $('#source-link').attr('href', 'https://en.wikipedia.org/wiki/Selection_sort');

  } else if (algorithmName === 'insertionsort') {
    $('#english-copy').text(
      'Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:'
    );
    let list = '<ul>';
    list += '<li>Simple implementation</li>'
    list += '<li>Efficient for (quite) small data sets, more efficient in practice than most other simple quadratic algorithms such as selection sort or bubble sort</li>'
    list += '<li>Adaptive, stable, and in-place</li>'
    $('#english-copy').append(list);

    $('#pseudocode-copy').text(
'i ← 1\nwhile i < length(A)  j ← i\n  while j > 0 and A[j-1] > A[j]\n    swap A[j] and A[j-1]\n    j ← j - 1\n  end while\n  i ← i + 1\nend while'
    );
    $('#source-link').attr('href', 'https://en.wikipedia.org/wiki/Insertion_sort');

  } else if (algorithmName === 'odd_even_sort') {
    $('#english-copy').text(
      'In computing, an odd–even sort is a relatively simple sorting algorithm, developed originally for use on parallel processors with local interconnections. It is a comparison sort related to bubble sort, with which it shares many characteristics. It functions by comparing all odd/even indexed pairs of adjacent elements in the list and, if a pair is in the wrong order (the first is larger than the second) the elements are switched. The next step repeats this for even/odd indexed pairs (of adjacent elements). Then it alternates between odd/even and even/odd steps until the list is sorted.'
    );
    $('#pseudocode-copy').text(
'function oddEvenSort(list) {\n  function swap(list, i, j) {\n    var temp = list[i];\n    list[i] = list[j];\n    list[j] = temp;\n  }\n\n  var sorted = false;\n  while (!sorted) {\n    sorted = true;\n    for (var i = 1; i < list.length - 1; i += 1) {\n      if(list[i] > list[i + 1]) {\n        swap(list, i, i + 1);\n        sorted = false;\n      }\n    }\n    for (var i = 0; i < list.length - 1; i += 1) {\n      if (list[i] > list[i + 1]) {\n        swap(list, i, i + 1);\n        sorted = false;\n      }\n    }\n  }\n}'
    );
    $('#source-link').attr('href', 'https://en.wikipedia.org/wiki/Odd%E2%80%93even_sort');

  } else if (algorithmName === 'cocktail_sort') {
    $('#english-copy').text(
      'Cocktail shaker sort is a variation of bubble sort that is both a stable sorting algorithm and a comparison sort. The algorithm differs from a bubble sort in that it sorts in both directions on each pass through the list. This sorting algorithm is only marginally more difficult to implement than a bubble sort, and solves the problem of turtles in bubble sorts. It provides only marginal performance improvements, and does not improve asymptotic performance; like the bubble sort, it is not of practical interest (insertion sort is preferred for simple sorts), though it finds some use in education.'
    );
    $('#pseudocode-copy').text(
'procedure cocktailSort( A : list of sortable items ) defined as:\n  do\n    swapped := false\n    for each i in 0 to length( A ) - 2 do:\n      if A[ i ] > A[ i + 1 ] then\n        swap( A[ i ], A[ i + 1 ] )\n        swapped := true\n      end if\n    end for\n    if not swapped then\n      // we can exit the outer loop here if no swaps occurred.\n      break do-while loop\n    end if\n    swapped := false\n    for each i in length( A ) - 2 to 0 do:\n      if A[ i ] > A[ i + 1 ] then\n        swap( A[ i ], A[ i + 1 ] )\n        swapped := true\n      end if\n    end for\n  while swapped // if no elements have been swapped, then the list is sorted\nend procedure'
    );
    $('#source-link').attr('href', 'https://en.wikipedia.org/wiki/Cocktail_shaker_sort');

  } else if (algorithmName === 'quicksort') {
    $('#english-copy').text(
      'Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation is defined. Efficient implementations of Quicksort are not a stable sort, meaning that the relative order of equal sort items is not preserved. Quicksort can operate in-place on an array, requiring small additional amounts of memory to perform the sorting. It is very similar to selection sort, except that it does not always choose worst-case partition. The pivot selection and partitioning steps can be done in several different ways; the choice of specific implementation schemes greatly affects the algorithm\'s performance.'
    );
    $('#pseudocode-copy').text(
'algorithm quicksort(A, lo, hi) is\n  if lo < hi then\n    p := partition(A, lo, hi)\n    quicksort(A, lo, p)\n    quicksort(A, p + 1, hi)\n\nalgorithm partition(A, lo, hi) is\n  pivot := A[lo + (hi - lo) / 2]\n  i := lo - 1\n  j := hi + 1\n  loop forever\n    do\n      i := i + 1\n    while A[i] < pivot\n    do\n      j := j - 1\n    while A[j] > pivot\n    if i >= j then\n      return j\n    swap A[i] with A[j]'
    );
    $('#source-link').attr('href', 'href=https://en.wikipedia.org/wiki/Quicksort');

  } else if (algorithmName === 'heapsort') {
    $('#english-copy').text(
      'Heapsort can be thought of as an improved selection sort: like that algorithm, it divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element and moving that to the sorted region. The improvement consists of the use of a heap data structure rather than a linear-time search to find the maximum.'
    );
    $('#pseudocode-copy').text(
'procedure heapsort(a, count) is\n  input: an unordered array a of length count\n\n  // Build the heap in array a so that largest value is at the root\n  heapify(a, count)\n\n  /* The following loop maintains the invariants that a[0:end] is a\n  heap and every element beyond end is greater than everything\n  before it (so a[end:count] is in sorted order) */\n    end ← count - 1\n    while end > 0 do\n      // a[0] is the root and largest value.\n      // The swap moves it in front of the sorted elements.\n      swap(a[end], a[0])\n      (the heap size is reduced by one)\n      end ← end - 1\n      (the swap ruined the heap property, so restore it)\n      siftDown(a, 0, end)'
    );
    $('#source-link').attr('href', 'https://en.wikipedia.org/wiki/Heapsort');

  } else if (algorithmName === 'mergesort') {
    $('#english-copy').text(
      'Conceptually, a merge sort works as follows:'
      );
      let list = '<ul>';
      list += '<li>Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).</li>'
      list += '<li>Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.</li>'
      $('#english-copy').append(list);
    $('#pseudocode-copy').text(
'procedure mergesort( var a as array )\n   if ( n == 1 ) return a\n\n   var l1 as array = a[0] ... a[n/2]\n   var l2 as array = a[n/2+1] ... a[n]\n\n   l1 = mergesort( l1 )\n   l2 = mergesort( l2 )\n\n   return merge( l1, l2 )\nend procedure\n\nprocedure merge( var a as array, var b as array )\n\n   var c as array\n   while ( a and b have elements )\n      if ( a[0] > b[0] )\n         add b[0] to the end of c\n         remove b[0] from b\n      else\n         add a[0] to the end of c\n         remove a[0] from a\n      end if\n   end while\n\n   while ( a has elements )\n      add a[0] to the end of c\n      remove a[0] from a\n   end while\n\n   while ( b has elements )\n      add b[0] to the end of c\n      remove b[0] from b\n   end while\n\n   return c\n\nend procedure'
    );
    $('#source-link').attr('href', 'https://en.wikipedia.org/wiki/Merge_sort');

  } else if (algorithmName === 'introsort') {
    $('#english-copy').text(
      'Introsort or introspective sort is a hybrid sorting algorithm that provides both fast average performance and (asymptotically) optimal worst-case performance. It begins with quicksort and switches to heapsort when the recursion depth exceeds a level based on (the logarithm of) the number of elements being sorted. This combines the good parts of both algorithms, with practical performance comparable to quicksort on typical data sets and worst-case O(n log n) runtime due to the heap sort. Since both algorithms it uses are comparison sorts, it is also a comparison sort.'
    );
    $('#pseudocode-copy').text(
'procedure sort(A : array):\n  let maxdepth = ⌊log(length(A))⌋ × 2\n  introsort(A, maxdepth)\n\nprocedure introsort(A, maxdepth):\n  n ← length(A)\n  if n ≤ 1:\n    return  // base case\n  else if maxdepth = 0:\n    heapsort(A)\n  else:\n    // assume this function does pivot selection, \n    // p is the final position of the pivot\n    p ← partition(A)\n    introsort(A[0:p-1], maxdepth - 1)\n    introsort(A[p+1:n], maxdepth - 1)'
    );
    $('#source-link').attr('href', 'https://en.wikipedia.org/wiki/Introsort');

  } else {
    $('#english-copy').text('Nothing!');
  }
}

$( document ).ready(function() {
    switchAlgorithmCopy();
});

function algoChange() {
  switchAlgorithmCopy();
}
