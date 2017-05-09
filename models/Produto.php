<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "produto".
 *
 * @property integer $id_produto
 * @property string $produto
 * @property string $descricao
 * @property integer $id_categoria
 * @property integer $valor
 */
class Produto extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'produto';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['produto', 'descricao', 'id_categoria'], 'required'],
            [['id_categoria', 'valor'], 'integer'],
            [['produto'], 'string', 'max' => 45],
            [['descricao'], 'string', 'max' => 60],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_produto' => 'Id Produto',
            'produto' => 'Produto',
            'descricao' => 'Descricao',
            'id_categoria' => 'Id Categoria',
            'valor' => 'Valor',
        ];
    }
}
