# -*- coding: utf-8 -*-
import sys
from Crypto.Cipher import AES
from binascii import b2a_hex, a2b_hex


class PyCrypt:
    def __init__(self, key):
        self.key = key
        self.mode = AES.MODE_CBC

    def encrypt(self, text):
        cryptor = AES.new(self.key, self.mode, self.key)
        length = 16
        count = len(text)
        add = length - (count % length)
        text = text + ('\0' * add)
        self.ciphertext = cryptor.encrypt(text)
        return b2a_hex(self.ciphertext).decode()

    def decrypt(self, text):
        cryptor = AES.new(self.key, self.mode, self.key)
        plain_text = cryptor.decrypt(a2b_hex(text))
        return plain_text.rstrip(b'\0').decode()

pc = PyCrypt('12345678abcdefgh')


if __name__ == '__main__':
    pc = PyCrypt('12345678abcdefgh')      #初始化密钥
    e = pc.encrypt("00000")
    d = pc.decrypt(e)
    print(e, d)
    e = pc.encrypt("00000000000000000000000000")
    d = pc.decrypt(e)
    print(e, d)