# Access-Control-Allow-Origin: *
from flask import Flask
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS

import sqlite3

app = Flask(__name__)
CORS(app, supports_credentials=True)
api = Api(app)

user_list = [{
    'username': 'Felix',
    'email': 'asdchanbird'
}]


class User(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('username', required=True,
                                 type=str, help="username is required", location="args")
        self.args = self.parser.parse_args()
        super().__init__()

    def get(self):
        for user in user_list:
            if user['username'] == self.args['username']:
                return user
        return {'username': None}, 404

    def post(self):
        user = {
            'username': self.args['username'],
            'email': 'asdchanbird'
        }
        user_list.append(user)
        return {'note': 'successfully create'}

    def patch(self):
        user_find = None
        for user in user_list:
            if user['username'] == self.args['username']:
                user_find = user
        if user_find:
            user_list.remove(user_find)
            user_find['email'] = '121241424'
            user_list.append(user_find)
            return {'note': 'successfully update'}

    def delete(self):
        for ind, user in enumerate(user_list):
            if user['username'] == self.args['username']:
                deleted_user = user_list.pop(ind)
                print(deleted_user)
                return {'note': 'successfully delete'}


class UserList(Resource):
    def get(self):
        return {'user_list': user_list}


# api.add_resource(User, '/user/<string:username>')
api.add_resource(User, '/user')
api.add_resource(UserList, '/users')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
