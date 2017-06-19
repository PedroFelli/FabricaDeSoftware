<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\Deposito */

$this->title = 'Create Deposito';
$this->params['breadcrumbs'][] = ['label' => 'Depositos', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="deposito-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
