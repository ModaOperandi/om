import React from 'react';
import ChevronLeftIcon from '@moda/icons/chevron-left-16';
import ChevronRightIcon from '@moda/icons/chevron-right-16';
import { cond, range, T as otherwise } from 'ramda';
import classNames from 'classnames';

import './Paginator.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  selectedPage: number;
  totalPages: number;
  maximumPagesToShow?: number;
  onGoToPage: (page: number) => void;
}

const canDoNext = (page: number, totalPages: number) => page < totalPages;
const canDoPrev = (page: number) => page > 1;

const defaultMaximumNumberOfPagesToShow = 5;

const whenThereAreFewerPagesThanWeDisplay = (_: number, totalPages: number, maxPages: number) =>
  totalPages <= maxPages;
const whenCurrentPageIsLessThanHalfTheTotal = (page: number, _: number, maxPages: number) =>
  page <= Math.ceil(maxPages / 2);
const whenCurrentPageIsGreaterThanHalfTheTotal = (
  page: number,
  totalPages: number,
  maxPages: number
) => page >= totalPages - Math.floor(maxPages / 2);

const showAllPages = (_: number, totalPages: number) => range(1, totalPages + 1);
const showFirstNPagesAndLastPage = (_: number, totalPages: number, maxPages: number) => [
  ...range(1, maxPages),
  totalPages
];
const showTheLastNPages = (_: number, totalPages: number, maxPages: number) => [
  1,
  ...range(totalPages - maxPages + 2, totalPages + 1)
];
const showAGroupOfPagesCenteredOnTheCurrentPage = (
  page: number,
  totalPages: number,
  maxPages: number
) => {
  const diff = Math.floor((maxPages - 2) / 2);
  return [1, ...range(page - diff, page + diff + 1), totalPages];
};

const determinePagesToShow = cond([
  [whenThereAreFewerPagesThanWeDisplay, showAllPages],
  [whenCurrentPageIsLessThanHalfTheTotal, showFirstNPagesAndLastPage],
  [whenCurrentPageIsGreaterThanHalfTheTotal, showTheLastNPages],
  [otherwise, showAGroupOfPagesCenteredOnTheCurrentPage]
]);

export const Paginator: React.FC<Props> = ({
  selectedPage,
  totalPages,
  maximumPagesToShow = defaultMaximumNumberOfPagesToShow,
  onGoToPage,
  className
}: Props) => {
  const pages = determinePagesToShow(selectedPage, totalPages, maximumPagesToShow);

  const nextPage = (page: number) => onGoToPage(page + 1);
  const prevPage = (page: number) => onGoToPage(page - 1);

  return (
    <section className={classNames('Paginator', className)} aria-label='Pagination'>
      <button
        disabled={!canDoPrev(selectedPage)}
        onClick={() => {
          prevPage(selectedPage);
          window.scrollTo(0, 0);
        }}
        className={classNames('Paginator__button', 'Paginator__button--previous')}
      >
        <ChevronLeftIcon className='Paginator__previous-chevron' /> Previous
      </button>

      {pages.map((page, index) => (
        <React.Fragment key={index}>
          <button
            onClick={() => {
              onGoToPage(page);
              window.scrollTo(0, 0);
            }}
            className={classNames('Paginator__button', {
              'Paginator__button--currentPage': page === selectedPage
            })}
          >
            {page}
          </button>

          {pages[index + 1] && pages[index + 1] !== page + 1 && (
            <span className={classNames('Paginator__button', 'Paginator__button--ellipsis')}>
              ...
            </span>
          )}
        </React.Fragment>
      ))}

      <button
        disabled={!canDoNext(selectedPage, totalPages)}
        onClick={() => {
          nextPage(selectedPage);
          window.scrollTo(0, 0);
        }}
        className={classNames('Paginator__button', 'Paginator__button--next')}
      >
        Next <ChevronRightIcon className='Paginator__next-chevron' />
      </button>
    </section>
  );
};
