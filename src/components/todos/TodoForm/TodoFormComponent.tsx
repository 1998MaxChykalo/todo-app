import * as React from 'react';
import { Input, Button, Icon, Tag } from 'antd';
import * as Yup from 'yup';

import { Formik, Form, Field, FieldProps, FieldArray } from 'formik';
import FormItem from 'antd/lib/form/FormItem';
import { CreateTodoModel } from '../../../dto/create-todo.model';

interface Props {
  addTodo(values: CreateTodoModel): void;
}

const createTodoValidationSchema = Yup.object().shape({
  text: Yup.string().required(),
  tags: Yup.array(Yup.string())
});

export const TodoForm: React.FC<Props> = ({ addTodo }) => {
  return (
    <Formik
      initialValues={{ text: '', tags: [] }}
      validationSchema={createTodoValidationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        addTodo(values);
        resetForm();
      }}
      render={({ values, errors, status, touched, isSubmitting }) => (
        <Form className='my-5'>
          <Field type="text" name="text" render={({ field }: FieldProps) => (
            <FormItem
              validateStatus={touched.text && errors.text ? 'error' : undefined}
              help={touched.text && errors.text}>
              <Input
                {...field}
                prefix={<Icon type="plus" />}
                size='large'
                type="text"
                className="todo-input" />
            </FormItem>
          )} />
          <FieldArray
            name='tags'
            render={arrayHelpers => (
              <div>
                {
                  values.tags.length > 0
                    ? values.tags.map((tag, index) => (
                      <div key={index}>
                        <Field name={`tags.${index}`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                      </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                        >
                          +
                      </button>
                      </div>
                    )) : (
                      <button type="button" onClick={() => arrayHelpers.push('')}>
                        {/* show this when user has removed all friends from the list */}
                        Add a tag
                    </button>
                    )
                }
              </div>
            )}
          />
          <Button
            style={{ width: '100%' }} htmlType='submit' disabled={errors.text ? true : false} size='large' >Add ToDo</Button>
        </Form>
      )}
    >
    </Formik>
  )
};

