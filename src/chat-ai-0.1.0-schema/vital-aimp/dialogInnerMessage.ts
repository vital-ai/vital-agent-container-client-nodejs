import { DialogElement } from './dialogElement';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogInnerMessage
 */
export class DialogInnerMessage extends DialogElement {
  public processed?: boolean;
  public messageSerialized?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogInnerMessage';
  }

  /**
   * Get property definitions for DialogInnerMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isProcessed',
        tsPropertyName: 'processed',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageSerialized',
        tsPropertyName: 'messageSerialized',
        type: 'string',
        required: false
      }
    ];
  }


}
