import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage
 */
export class MetaQLResultsMessage extends AIMPMessage {
  public offset?: number;
  public totalResults?: number;
  public statusMessage?: string;
  public status?: string;
  public commandEndDateTime?: string | Date;
  public haleyResponseTypeURI?: string;
  public limit?: number;
  public commandReceivedDateTime?: string | Date;
  public affectedResourceCount?: number;
  public bindingNames?: string[];


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage';
  }

  /**
   * Get property definitions for MetaQLResultsMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOffset',
        tsPropertyName: 'offset',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTotalResults',
        tsPropertyName: 'totalResults',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatusMessage',
        tsPropertyName: 'statusMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatus',
        tsPropertyName: 'status',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandEndDateTime',
        tsPropertyName: 'commandEndDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyResponseTypeURI',
        tsPropertyName: 'haleyResponseTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLimit',
        tsPropertyName: 'limit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandReceivedDateTime',
        tsPropertyName: 'commandReceivedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAffectedResourceCount',
        tsPropertyName: 'affectedResourceCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBindingNames',
        tsPropertyName: 'bindingNames',
        type: 'string[]',
        required: false
      }
    ];
  }


}
