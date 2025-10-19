import { CommandMessage } from './commandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#UnsetFactMessage
 */
export class UnsetFactMessage extends CommandMessage {
  public doubleValue?: number;
  public includeSubclasses?: boolean;
  public propertyName?: string;
  declare public geolocation?: string;
  public factClassName?: string;
  public booleanValue?: boolean;
  public truthValue?: string;
  public integerValue?: number;
  public stringValue?: string;
  public factScope?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#UnsetFactMessage';
  }

  /**
   * Get property definitions for UnsetFactMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDoubleValue',
        tsPropertyName: 'doubleValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isIncludeSubclasses',
        tsPropertyName: 'includeSubclasses',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGeolocation',
        tsPropertyName: 'geolocation',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactClassName',
        tsPropertyName: 'factClassName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBooleanValue',
        tsPropertyName: 'booleanValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTruthValue',
        tsPropertyName: 'truthValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIntegerValue',
        tsPropertyName: 'integerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStringValue',
        tsPropertyName: 'stringValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactScope',
        tsPropertyName: 'factScope',
        type: 'string',
        required: false
      }
    ];
  }


}
