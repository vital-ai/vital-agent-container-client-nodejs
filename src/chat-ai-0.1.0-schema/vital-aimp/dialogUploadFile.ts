import { DialogAction } from './dialogAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogUploadFile
 */
export class DialogUploadFile extends DialogAction {
  public fileScope?: string;
  public otherChannelTarget?: boolean;
  public text?: string;
  public ignoreStandardIntents?: boolean;
  public propertyName?: string;
  public fileUploadProcessingType?: string;
  public broadcastOnly?: boolean;
  public interruptedFactName?: string;
  public inputPropertyName?: string;
  public factPropertyName?: string;
  public factScope?: string;
  public inputFileFactName?: string;
  public inputFactScope?: string;
  public inputFileFactScope?: string;
  public skippable?: boolean;
  public internalOnly?: boolean;
  public targetChannel?: string;
  public sendAsUser?: boolean;
  public currentChannelTarget?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogUploadFile';
  }

  /**
   * Get property definitions for DialogUploadFile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileScope',
        tsPropertyName: 'fileScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isOtherChannelTarget',
        tsPropertyName: 'otherChannelTarget',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasText',
        tsPropertyName: 'text',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isIgnoreStandardIntents',
        tsPropertyName: 'ignoreStandardIntents',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFileUploadProcessingType',
        tsPropertyName: 'fileUploadProcessingType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isBroadcastOnly',
        tsPropertyName: 'broadcastOnly',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInputPropertyName',
        tsPropertyName: 'inputPropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactPropertyName',
        tsPropertyName: 'factPropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactScope',
        tsPropertyName: 'factScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInputFileFactName',
        tsPropertyName: 'inputFileFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInputFactScope',
        tsPropertyName: 'inputFactScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInputFileFactScope',
        tsPropertyName: 'inputFileFactScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSkippable',
        tsPropertyName: 'skippable',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isInternalOnly',
        tsPropertyName: 'internalOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTargetChannel',
        tsPropertyName: 'targetChannel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSendAsUser',
        tsPropertyName: 'sendAsUser',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCurrentChannelTarget',
        tsPropertyName: 'currentChannelTarget',
        type: 'boolean',
        required: false
      }
    ];
  }


}
