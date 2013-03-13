#!/usr/bin/env python

try:
    from setuptools import setup, find_packages
except ImportError:
    from distutils.core import setup, find_packages

VERSION = '0.0.1'
LONG_DESC = """\
A Angularjs client for django-hyperadmin

Largely inspired by the Emberjs client by zbytes64:
https://github.com/zbyte64/django-hyperadmin-emberclient
"""

setup(name='django-hyperadmin-angularclient',
      version=VERSION,
      description="",
      long_description=LONG_DESC,
      classifiers=[
          'Programming Language :: Python',
          'Operating System :: OS Independent',
          'Natural Language :: English',
          'Development Status :: 3 - Alpha',
          'Intended Audience :: Developers',
          'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
      ],
      keywords='django hyperadmin',
      maintainer = 'Maxime Haineault',
      maintainer_email = 'zbyte64@gmail.com',
      url='https://github.com/h3/django-hyperadmin-angularclient',
      license='New BSD License',
      packages=find_packages(exclude=['tests']),
      include_package_data = True,
  )
