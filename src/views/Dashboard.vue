<template>
  <div>
    <p>{{ $t('hi') }}</p>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eligendi fuga ipsa maxime nam nobis nulla
      repellendus totam. Accusantium animi, culpa dolorem enim est ex inventore non quidem reprehenderit ut.</h1>
    <h1>Doloremque dolores, doloribus dolorum exercitationem, illo incidunt iusto libero, maiores provident qui soluta
      totam ullam! At autem consectetur culpa delectus eligendi exercitationem expedita ipsam nesciunt placeat
      reiciendis rerum, sed voluptates!</h1>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
