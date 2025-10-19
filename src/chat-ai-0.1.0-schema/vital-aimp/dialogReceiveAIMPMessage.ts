import { DialogAction } from './dialogAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogReceiveAIMPMessage
 */
export class DialogReceiveAIMPMessage extends DialogAction {
  public ignoreStandardIntents?: boolean;
  public interruptedFactName?: string;
  public consumeImmediately?: boolean;
  public propertyName?: string;
  public expression?: string;
  public timeoutPropertyName?: string;
  public timeoutSeconds?: number;
  public graphObjectsLinked?: boolean;
  public timeoutEnabled?: boolean;
  public inputPropertyName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogReceiveAIMPMessage';
  }

  /**
   * Get property definitions for DialogReceiveAIMPMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isIgnoreStandardIntents',
        tsPropertyName: 'ignoreStandardIntents',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInterruptedFactName',
        tsPropertyName: 'interruptedFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isConsumeImmediately',
        tsPropertyName: 'consumeImmediately',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasExpression',
        tsPropertyName: 'expression',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTimeoutPropertyName',
        tsPropertyName: 'timeoutPropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTimeoutSeconds',
        tsPropertyName: 'timeoutSeconds',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGraphObjectsLinked',
        tsPropertyName: 'graphObjectsLinked',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isTimeoutEnabled',
        tsPropertyName: 'timeoutEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInputPropertyName',
        tsPropertyName: 'inputPropertyName',
        type: 'string',
        required: false
      }
    ];
  }


}
