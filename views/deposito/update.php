<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Deposito */

$this->title = 'Update Deposito: ' . $model->id_deposito;
$this->params['breadcrumbs'][] = ['label' => 'Depositos', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id_deposito, 'url' => ['view', 'id' => $model->id_deposito]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="deposito-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
