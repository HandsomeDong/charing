# -*- coding: utf-8 -*-

from random import Random


def random_str(randomlength=16):
    randomstr = ''
    chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
    length = len(chars) - 1
    random = Random()
    for i in range(randomlength):
        randomstr+=chars[random.randint(0, length)]
    return randomstr