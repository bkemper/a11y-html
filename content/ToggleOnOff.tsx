import { FC } from 'react';

import { CodeContainer } from '~components/CodeContainer';
import { CodeSection } from '~components/CodeSection';
import { InlineCode } from '~components/InlineCode';
import { InlineLink } from '~components/InlineLink';

const toggle = `
<button
  type="button"
  [#toggle-role]role="switch"[]
  [#toggle-checked]aria-checked="true"[]
>
  Toggle
</button>
`;

export const ToggleOnOff: FC = () => {
  return (
    <CodeContainer code={toggle} title="Toggle Button (On/Off)">
      <p>
        A type of checkbox that represents on and off values, as opposed to
        checked and unchecked values. Functionally the same as a{' '}
        <InlineCode>checkbox</InlineCode>, but should be used when the element
        visually looks like a button.
      </p>
      <CodeSection title="role" linkTarget="#toggle-role">
        <p>
          The attribute <InlineCode>role=&quot;switch&quot;</InlineCode> tells
          assistive technology that this element is a switch.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role">
              MDN switch role documentation
            </InlineLink>
          </li>
          <li>
            See:{' '}
            <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#switch">
              WAI-ARIA switch role documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
      <CodeSection title="aria-checked" linkTarget="#toggle-checked">
        <p>
          The aria attribute <InlineCode>aria-checked</InlineCode> is required
          for any elements with a switch role. Values must be either{' '}
          <InlineCode>&quot;true&quot;</InlineCode> or{' '}
          <InlineCode>&quot;false&quot;</InlineCode>.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked">
              MDN aria-checked documentation
            </InlineLink>
          </li>
          <li>
            See:{' '}
            <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#aria-checked">
              WAI-ARIA aria-checked documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
    </CodeContainer>
  );
};
