<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "empresa".
 *
 * @property integer $id_empresa
 * @property string $razaoSocial
 * @property string $cnpj
 * @property integer $telefone
 * @property string $endereco
 */
class Empresa extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'empresa';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id_empresa'], 'required'],
            [['id_empresa', 'telefone'], 'integer'],
            [['razaoSocial', 'cnpj', 'endereco'], 'string', 'max' => 45],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_empresa' => 'Id Empresa',
            'razaoSocial' => 'Razao Social',
            'cnpj' => 'Cnpj',
            'telefone' => 'Telefone',
            'endereco' => 'Endereco',
        ];
    }
}
