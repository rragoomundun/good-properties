import { Article } from '../../../shared/models/Article.model';

import { Status } from '../../../shared/enums/status.enum';

export interface ArticleState {
  article: Article;
  status: Status;
}
