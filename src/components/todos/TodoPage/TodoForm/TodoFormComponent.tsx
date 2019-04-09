import * as React from 'react';
import { Input, Button, Icon, Tag, InputNumber, TimePicker } from 'antd';
import * as Yup from 'yup';

import { Formik, Form, Field, FieldProps, FieldArray } from 'formik';
import FormItem from 'antd/lib/form/FormItem';
import { CreateTodoModel } from '../../../../dto/create-todo.model';
import styled from "styled-components";
import moment from 'moment';

const InputGroup = styled(Input.Group)`
  display: flex !important;
  margin: 0 -10px !important;
  flex-wrap: wrap;
  width: calc(100% + 20px) !important;
`;
interface Props {
  addTodo(values: CreateTodoModel): void;
}

const createTodoValidationSchema = Yup.object().shape({
  text: Yup.string().required(),
  tags: Yup.array(Yup.string().min(3)),
  estimatedTime: Yup.number().min(0)
});

export const TodoForm: React.FC<Props> = ({ addTodo }) => {
  return (
    <Formik
      initialValues={{ text: '', tags: [], estimatedTime: 0 }}
      validationSchema={createTodoValidationSchema}
      onSubmit={(values, { resetForm }) => {
        addTodo(values);
        resetForm();
      }}
      render={({ values, errors, status, touched }) => (
        <Form className='my-3'>
          <TimePicker
            className='my-2'
            onChange={(props) => {
              values.estimatedTime = props.toDate().getTime();
            }}
            defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
            size='large' />
          <Field type="text" name="text" render={({ field }: FieldProps) => (
            <FormItem
              validateStatus={touched.text && errors.text ? 'error' : undefined}
              help={touched.text && errors.text}>
              <Input
                {...field}
                prefix={<Icon type="plus" />}
                size='large'
                type="text" />
            </FormItem>
          )} />
          <FieldArray
            name='tags'
            render={arrayHelpers => (
              <>
                <InputGroup>
                  {
                    values.tags.length > 0
                    && values.tags.map((tag, index) => (
                      <Field key={index} name={`tags.${index}`} render={({ field }: FieldProps) => (
                        <FormItem
                          style={{ width: '20%', padding: '10px' }}
                          validateStatus={touched.tags && touched.tags[index] && errors.tags && errors.tags[index] ? 'error' : undefined}
                          help={touched.tags && touched.tags[index] && errors.tags && errors.tags[index]}>
                          <Input

                            suffix={<Icon type="minus" onClick={() => arrayHelpers.remove(index)} />}
                            {...field}
                            size='large'
                            type="text"
                            className="todo-input" />
                        </FormItem>
                      )} />
                    ))
                  }
                </InputGroup>
                <Button className='todo__item__button--small' onClick={() => arrayHelpers.push('')}>
                  Add a tag
                </Button>
              </>
            )}
          />
          <Button
            style={{ width: '100%' }} htmlType='submit' disabled={!!Object.keys(errors).length} size='large'>Add ToDo</Button>
        </Form>
      )}
    >
    </Formik>
  )
};

