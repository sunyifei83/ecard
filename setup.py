from setuptools import setup, find_packages  

setup(  
  name = 'ecard',  
  version = '0.0.1',  
  keywords = ('ecard', 'greetings','card'),  
  description = 'ecard greetings card',  
  license = 'MIT License',  
  install_requires = ['django>=1.6'],  

  author = 'wengcc',  
  author_email = '949409306@qq.com',  

  packages = find_packages(),  
  platforms = 'any',  
) 
