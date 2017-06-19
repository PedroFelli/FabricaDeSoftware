<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\DepositoSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Depositos';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="deposito-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Deposito', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id_deposito',
            'id_filial',
            'capacidade',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
