<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Produto */

$this->title = 'Update Produto: ' . $model->id_produto;
$this->params['breadcrumbs'][] = ['label' => 'Produtos', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id_produto, 'url' => ['view', 'id' => $model->id_produto]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="produto-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
