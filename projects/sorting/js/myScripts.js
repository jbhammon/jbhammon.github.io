function switchAlgorithmCopy() {

  $('#bubble-sort-copy').addClass('hidden');
  $('#insertion-sort-copy').addClass('hidden');
  $('#selection-sort-copy').addClass('hidden');
  $('#odd-even-sort-copy').addClass('hidden');
  $('#cocktail-sort-copy').addClass('hidden');
  $('#quicksort-sort-copy').addClass('hidden');
  $('#heapsort-sort-copy').addClass('hidden');
  $('#merge-sort-copy').addClass('hidden');
  $('#bitonic-merge-sort-copy').addClass('hidden');
  $('#intro-sort-copy').addClass('hidden');

  let algorithmName = $('#algo-select').val();

  if (algorithmName === 'bubblesort') {
    $('#bubble-sort-copy').toggleClass('hidden');
  } else if (algorithmName === 'selectionsort') {
    $('#selection-sort-copy').toggleClass('hidden');
  } else if (algorithmName === 'insertionsort') {
    $('#insertion-sort-copy').toggleClass('hidden');
  } else if (algorithmName === 'odd_even_sort') {
    $('#odd-even-sort-copy').toggleClass('hidden');
  } else if (algorithmName === 'cocktail_sort') {
    $('#cocktail-sort-copy').toggleClass('hidden');
  } else if (algorithmName === 'quicksort') {
    $('#quicksort-sort-copy').toggleClass('hidden');
  } else if (algorithmName === 'heapsort') {
    $('#heapsort-sort-copy').toggleClass('hidden');
  } else if (algorithmName === 'mergesort') {
    $('#merge-sort-copy').toggleClass('hidden');
  } else if (algorithmName === 'bitonic_mergesort') {
    $('#bitonic-merge-sort-copy').toggleClass('hidden');
  } else if (algorithmName === 'introsort') {
    $('#intro-sort-copy').toggleClass('hidden');
  } else {
    $('#algorithm-name').text('Nothing!');
  }
}

$( document ).ready(function() {
    switchAlgorithmCopy();
});

function algoChange() {
  switchAlgorithmCopy();
}
