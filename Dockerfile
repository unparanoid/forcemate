FROM    debian:stable-slim
WORKDIR /repo
EXPOSE  8080

RUN  \
  apt update &&  \
  apt install -y  \
    bash  \
    curl  \
    gnupg &&  \
  (curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -) &&  \
  (echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list) &&  \
  apt update &&  \
  apt purge -y  \
    curl  \
    gnupg &&  \
  apt install -y  \
    yarn &&  \
  apt autoremove -y &&  \
  apt clean -y &&  \
  rm -rf /var/lib/apt/lists/* &&  \
  useradd  \
    -d /repo  \
    -u 1000  \
    -s /usr/bin/bash user
