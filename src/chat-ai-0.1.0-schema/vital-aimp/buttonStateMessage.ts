import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ButtonStateMessage
 */
export class ButtonStateMessage extends AIMPMessage {
  public previousButtonLabel?: string;
  public previousButtonEnabled?: boolean;
  public nextButtonEnabled?: boolean;
  public nextButtonLabel?: string;
  public submitButtonEnabled?: boolean;
  public submitButtonLabel?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ButtonStateMessage';
  }

  /**
   * Get property definitions for ButtonStateMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPreviousButtonLabel',
        tsPropertyName: 'previousButtonLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isPreviousButtonEnabled',
        tsPropertyName: 'previousButtonEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isNextButtonEnabled',
        tsPropertyName: 'nextButtonEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasNextButtonLabel',
        tsPropertyName: 'nextButtonLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSubmitButtonEnabled',
        tsPropertyName: 'submitButtonEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSubmitButtonLabel',
        tsPropertyName: 'submitButtonLabel',
        type: 'string',
        required: false
      }
    ];
  }


}
