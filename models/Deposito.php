<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "deposito".
 *
 * @property integer $id_deposito
 * @property integer $id_filial
 * @property integer $capacidade
 */
class Deposito extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'deposito';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id_filial', 'capacidade'], 'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_deposito' => 'Id Deposito',
            'id_filial' => 'Id Filial',
            'capacidade' => 'Capacidade',
        ];
    }
}
